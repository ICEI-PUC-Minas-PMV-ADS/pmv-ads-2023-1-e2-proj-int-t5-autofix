FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 5185

ENV ASPNETCORE_URLS=http://+:5185

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["AutoFix.csproj", "./"]
RUN dotnet restore "AutoFix.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "AutoFix.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AutoFix.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AutoFix.dll"]
