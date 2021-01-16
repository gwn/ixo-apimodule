# ixo-apimodule

This is a client for the [Ixo
Blocksync](https://github.com/ixofoundation/ixo-blocksync) and the
[Ixo Cell Node](https://github.com/ixofoundation/ixo-cellnode)
services.


## Installation

    npm install --save ixo-module


## Usage

    const {Ixo}  require('@ixo/ixo-apimodule')
    const ixo = new Ixo('https://blocksync-api-url')


## Project Functions

Functions are called using `ixo.project.<functionName>`.


## List Projects

Returns a list of all projects cached in the Blocksync node. Note
that each ixo Relayer Portal can configure their instance of
ixo-blocksync to only synchronise projects that are associated
with the Relayer. Linked projects have the Relayer Node-ID in
their blockchain record (Entity Document).

    ixo.project.listProjects()


## Get Project

Retrieves public project details by DID

    let projectDid = 'did:ixo:TknEju4pjyRQvVehivZ82x';
    ixo.project.getProjectByDid(projectDid).then((result) => {
        console.log('Project Details: ' + result)
    })


### Create Project

    ixo.project.createProject(projectData, signature, PDSUrl)


### Upload Public Data

Function to upload into a Cell Node any public content relating to
a project. This returns a unique content identifier (CID) for the
data. This allows the data to be content-addressed and retrieved
using the identifier `dataUrl`. The primary use is to upload
images and json template files to the Cell Node. But this can
accept any arbitrary project-specific public data.

The `dataUrl` takes the form of
`data:<mediatype>;<encoding>,<data>`. In future this will be
replaced by IPLD standard content addresses

    let dataUrl = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO 9TXL0Y4OHwAAAABJRU5ErkJggg==';
    ixo.project.createPublic(dataUrl, PDSUrl) {
        console.log('Document hash: ' + result)
    })


### Retrieve Public Data

Retrieves previously uploaded data from a Cell-Node using the content address (hash)

    ixo.project.fetchPublic(documentHash, PDSUrl)


## Agent Functions

These calls take the form `ixo.agent.<functionName>`


### List Agents

Returns a list of all agents associated with a project, from the Cell Node.

    ixo.agent.listAgentsForProject(data, signature, PDSUrl)


### Register an Agent for a Project

Associates the Agent DID with the project.

    ixo.agent.createAgent(agentData, signature, PDSUrl)


### Update Agent Status

Update an agent's registration status.

Valid statuses are:

| Status | Value |
| :--- | :--- |
| Pending | 0 |
| Approved | 1 |
| Revoked | 2 |

    ixo.agent.createAgent(agentData, signature, PDSUrl)


## Claim Functions

Calls take the form `ixo.claim.<functionName>`


### List Claims

Returns a list of all claims for a project, from a Cell Node,
together with the claim status.

    ixo.claim.listClaimsForProject(data, signature, PDSUrl)


### Issue Claim

Issues a claim for an project.

    ixo.agent.createClaim(agentData, signature, PDSUrl)


### Evaluate a Claim

Sets the evaluation status for a claim.

Valid statuses are:

| Status | Value |
| :--- | :--- |
| Pending | 0 |
| Approved | 1 |
| Rejected | 2 |

    ixo.agent.evaluateClaim(evaluationData, signature, PDSUrl)


## User Functions

### Register agent DID and DID Document

Registers a new agent identifier and DID document (DDO) to the ixo blockchain.

    ixo.user.registerUserDid()


### Get a DID Document

Retrieves the DID Doc for a specified agent identifier

    ixo.user.getDidDoc('did:sov:2p19P17cr6XavfMJ8htYSS')


## Metrics

Returns the global statistics for all projects associated with a Relayer node.

    ixo.stats.getGlobalStats()


## Health Check Functions

### Blockchain Health Check

    ixo.network.pingIxoBlockchain()


### Explorer node health check

    ixo.network.pingIxoExplorer()
