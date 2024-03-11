# Secp256k1 Verify Failing

The scripts in this repository generate data for testing and additionally creates a prover.toml file in the circuit directory to be checked.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have [Noir](https://noir-lang.org/docs/getting_started/installation/) and [Node.js](https://nodejs.org/)  on your system. You can check if you have Node and Yarn installed by running the following commands:

```bash
node --version
nargo --version
```
## Installation

Follow these steps to set up the project locally.

- Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/d4n1sh404/noir-secp256k1-verify-repro
```

## Install Dependencies
Navigate to the project directory and install the required dependencies:

with yarn

```bash
yarn install
```

with npm

```bash
npm install
```

## Run
To start the project and create the prover.toml file, run the following command:

yarn 

```bash
yarn start
```

npm 

```bash
npm run start
```

node
```bash
node index.js
```

This command executes the predefined start script prints the current test values to the terminal, and generates the Prover.toml file in secp_verify folder, which can be directly checked.

## Check the prover

```bash
cd secp_verify
nargo prove
```


