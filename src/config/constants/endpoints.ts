export const GRAPH_API_PROFILE = process.env.REACT_APP_GRAPH_API_PROFILE
export const GRAPH_API_PREDICTION = process.env.REACT_APP_GRAPH_API_PREDICTION
export const GRAPH_API_LOTTERY = process.env.REACT_APP_GRAPH_API_LOTTERY
export const SNAPSHOT_VOTING_API = process.env.REACT_APP_SNAPSHOT_VOTING_API
export const SNAPSHOT_BASE_URL = process.env.REACT_APP_SNAPSHOT_BASE_URL
export const API_PROFILE = process.env.REACT_APP_API_PROFILE
export const SNAPSHOT_API = `${SNAPSHOT_BASE_URL}/graphql`
export const SNAPSHOT_HUB_API = `${SNAPSHOT_BASE_URL}/api/message`
export const BITQUERY_API = 'https://graphql.bitquery.io'

/**
 * V1 will be deprecated but is still used to claim old rounds
 */
export const GRAPH_API_PREDICTION_V1 = 'https://api.thegraph.com/subgraphs/name/pancakeswap/prediction'
// https://thegraph.testnet.wagyuswap.app/subgraphs/name/wagyu/graphql
export const INFO_CLIENT = 'http://164.90.190.145:8000/subgraphs/name/wagyu'
// export const INFO_CLIENT = 'https://thegraph.testnet.wagyuswap.app/subgraphs/name/wagyu/graphql'
export const BLOCKS_CLIENT = 'http://164.90.190.145:8000/subgraphs/name/blocks'
// export const BLOCKS_CLIENT = 'https://thegraph.testnet.wagyuswap.app/subgraphs/name/blocks'
