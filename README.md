# .NET Core Web Api Seed

```
nx serve reporting
```

```
dotnet new sln -o Api

dotnet new webapi -o Web.Api
dotnet new classlib -o Web.Api.Services
dotnet new classlib -o Web.Api.Database

dotnet sln Api.sln add Web.Api Web.Api.Services Web.Api.Database
```

```
dotnet tool install --global dotnet-ef

dotnet add Web.Api.Services package MySQL.Data.EntityFrameworkCore
dotnet add Web.Api.Services package Microsoft.EntityFrameworkCore.Design
```