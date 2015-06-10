# Mismo Workbench
MISMO Workbench will be a repository based tool for working with MISMO format data. This tool will initially provide a core repository with a UI for maintaining MISMO format XML documents for an initial use case, but will be extensible over time to handle many use cases and multiple MISMO versions.

Additionally, MISMO Workbench will be the Technology Demo platform for both the UI and Automation Frameworks. We will be creating and validating accelerators while also building a marketable product. Leveraging MISMO Workbench as the Tech Demo will add some development time on top of the requirements for the other accelerators.

For infrastructure and software support, we can leverage the already defined components. In addition we will need a data store – we will use an Open Source solution for this. If we need relational, we can use Postgres or MariaDB. We can also use the filesystem with an XML data store if we find it is sufficient for our needs.

Ultimately, MISMO Workbench could be a cloud-hosted tool that can be used for exporing the model and generating constrained schemata and object models. It can also be used as a dynamic UI for loan data. Components can be individually licensed as tooling for client custom development, or reuse in other Capco IP and on engagements.

## You will need
- You need node js installed on your computer.
- This app uses 'xml2json' module which internally uses 'node-expat' which will require extra steps if you want to get it installed on Windows. Please refer to its [documentation](http://node-xmpp.org/doc/expat.html#installing-on-windows?)

## Installation
This will install 'gulp', 'bower' globally. Then pulls other dependencies.
```bash
npm deps
```

## Usage
This will be a web application but for now, it generates MISMO elements, complex types and simple types.
The XSD is converted to JSON file in resources folder.