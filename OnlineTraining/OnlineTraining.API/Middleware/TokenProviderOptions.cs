﻿using System;
using Microsoft.IdentityModel.Tokens;

namespace OnlineTraining.API.Middleware
{
    public class TokenProviderOptions
    {
        public string Path { get; set; } = "/token";
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public TimeSpan Expiration { get; set; } = TimeSpan.FromMinutes(36000);
        public SigningCredentials SigningCredentials { get; set; }
    }
}
