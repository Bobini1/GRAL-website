#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.


FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443


FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
RUN apt-get update -yq
RUN apt-get install curl gnupg -yq
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
COPY ["GRAL-website.csproj", "GRAL website/"]
RUN dotnet restore "GRAL website/GRAL-website.csproj"
WORKDIR "/src/GRAL website"
COPY . .
RUN dotnet build "GRAL-website.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "GRAL-website.csproj" -c Release -o /app/publish --self-contained false --no-restore

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet GRAL-website.dll