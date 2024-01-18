# ViaCep Search CLI

## Description
This command-line interface (CLI) application, named "search," is developed using the Gluegun CLI framework. The primary purpose of this application is to perform a search for location details based on a given zip code using the ViaCep API.

## Installation
Before using the application, make sure you have Node.js installed on your machine. Then, follow these steps:

1. Clone the repository:
2. Change to the project directory:

## Usage
To utilize the "search" command, run the following:

``bash
cep search <zip-code>
``

Replace ``<zip-code>`` with the desired zip code for which you want to retrieve location details.

## Command Details
| Name    | Alias | Description                                                         |
|---------|-------|---------------------------------------------------------------------|
|  search | s     | This command performs a search for a zip code using the ViaCep API. |

## Requirements

* Node.js
* Axios library (automatically installed during the application setup)

## ViaCep API Integration
The application utilizes the ViaCep API to retrieve location details based on the provided zip code. It handles API responses, checking for errors and displaying appropriate messages.
