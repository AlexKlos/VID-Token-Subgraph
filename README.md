# VID-Token-Subgraph
Subgraph for the VID Token contracts
[V-ID]:https://about.v-id.org
[V-ID] is a service built to help prevent document fraud and add value by validating and verifying documents using blockchain technology.
## Networks and Performance
This subgraph can be found on The Graph Hosted Service at
https://thegraph.com/explorer/subgraph/alexklos/vid-token

You can also run this subgraph locally, if you wish. Instructions for that can be found in [The Graph Documentation]:https://thegraph.com/docs/quick-start [The Graph Documentation].
## Example Queries
Here we have example queries, so that you don't have to type them in yourself eachtime in the graphql playground.
```GraphQL
{
  validatePublishers(where: {publisherName: "0x2b3560e48f513bf856ad9a4bd37f39098a068e8c69d75e310209a6c07f5ecec0"}) {
    state
    publisherAddress
  }
  transfers(where: {_from: "0x0eab76f0d0633be3c006a9ae55c337ca7968e7ef"}) {
    id
    _from
    _to
    _value
  }
}
```

```GraphQL
{
  burns(first: 5) {
    burner
    value
  }
  freezes(first: 5) {
    target
    frozen
  }
}
```
