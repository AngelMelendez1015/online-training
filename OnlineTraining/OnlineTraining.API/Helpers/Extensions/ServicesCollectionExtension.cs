﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using Swashbuckle.AspNetCore.Swagger;
using OnlineTraining.Helper.Db;

namespace OnlineTraining.API.Helpers.Extensions
{
    public static class ServicesCollectionExtension
    {
        public static IServiceCollection IntegrateSwagger(this IServiceCollection services)
        {
            // Register the Swagger generator, defining one or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info
                {
                    Version = "v1",
                    Title = "Online Training API",
                    Contact = new Contact { Name = "Tony Hudson", Email = "", Url = "github.com/ngohungphuc" }
                });
            });

            return services;
        }

        public static IServiceCollection InjectServicesCollection(this IServiceCollection services)
        {
            //services.AddSingleton<IMongoClient, MongoClient>();
            return services;
        }
    }
}
