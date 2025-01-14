package com.edurne.tercero.psico;

import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.rest.RepositoryRestMvcAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import jakarta.persistence.EntityManagerFactory;

@SpringBootApplication
@EnableJpaRepositories(basePackages = { "com.edurne.tercero.psico.repository" })
@EnableAutoConfiguration(exclude = { DataSourceAutoConfiguration.class, RepositoryRestMvcAutoConfiguration.class })
@ComponentScan(basePackages = {
"com.edurne.tercero.psico" }, excludeFilters = @ComponentScan.Filter(type = FilterType.REGEX, pattern = "com\\.edurne\\.tercero\\.psico\\.test..*"))
public class EdurneterceropsicologiaApplication {

	public static void main(String[] args) {
		SpringApplication.run(EdurneterceropsicologiaApplication.class, args);
	}
	
	@Bean(destroyMethod = "close", name = "EdurneTerceroPsicoDatasource")
	DataSource dataSource(Environment env) {
		HikariConfig dataSourceConfig = new HikariConfig();
		dataSourceConfig.setDriverClassName(env.getRequiredProperty("spring.datasource.driver-class-name"));
		dataSourceConfig.setJdbcUrl(env.getRequiredProperty("spring.datasource.url"));
		dataSourceConfig.setUsername(env.getRequiredProperty("spring.datasource.username"));
		dataSourceConfig.setPassword(env.getRequiredProperty("spring.datasource.password"));
		dataSourceConfig.setPoolName("EdurneTerceroPsicoDatasource");

		return new HikariDataSource(dataSourceConfig);
	}	
	
	@Bean
	LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource, Environment env) {
		LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
		entityManagerFactoryBean.setDataSource(dataSource);
		entityManagerFactoryBean.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
		entityManagerFactoryBean.setPackagesToScan("com.edurne.tercero.psico.model");

		Properties jpaProperties = new Properties();

		// Configures the used database dialect. This allows Hibernate to create
		// SQL
		// that is optimized for the used database.
		jpaProperties.put("hibernate.dialect", env.getRequiredProperty("spring.jpa.database-platform"));

		// Specifies the action that is invoked to the database when the Hibernate
		// SessionFactory is created or closed.
		jpaProperties.put("hibernate.hbm2ddl.auto", env.getRequiredProperty("spring.jpa.hibernate.ddl-auto"));

		// If the value of this property is true, Hibernate writes all SQL
		// statements to the console.
		jpaProperties.put("hibernate.show_sql", env.getRequiredProperty("spring.jpa.show-sql"));

		// If the value of this property is true, Hibernate will format the SQL
		// that is written to the console.
		jpaProperties.put("hibernate.format_sql", env.getRequiredProperty("spring.jpa.properties.hibernate.format_sql"));

		entityManagerFactoryBean.setJpaProperties(jpaProperties);
		return entityManagerFactoryBean;
	}

	@Bean
	JpaTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(entityManagerFactory);
		return transactionManager;
	}


}
