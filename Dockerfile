FROM mcr.microsoft.com/dotnet/sdk:5.0
WORKDIR /src
EXPOSE 5000
EXPOSE 5001
COPY . .
ENV ASPNETCORE_URLS=https://+:5001;http://+:5000
RUN dotnet publish -c Release -o release-output
RUN cd ChatApp.API && dotnet dev-certs https --trust
WORKDIR /src/release-output
CMD dotnet ChatApp.API.dll
