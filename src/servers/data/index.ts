import type { SemVer } from '../../utils/helpers/version';


const hardcodedServer: ServerWithId = {
  id: 'Lufthansa-Link',
  name: 'Lufthansa Link',
  url: 'https://lh-link-u7201.vm.elestio.app',
  apiKey: '03f8d3a0-5a1e-4f5b-a93d-72da0bd810ff',
  autoConnect: true,
  version: '1.0.0', // Example version
  printableVersion: 'Version 1.0.0', // Modify as needed
};

export interface ServerData {
  name: string;
  url: string;
  apiKey: string;
}

export interface ServerWithId extends ServerData {
  id: string;
  autoConnect?: boolean;
}

export interface ReachableServer extends ServerWithId {
  version: SemVer;
  printableVersion: string;
}

export interface NonReachableServer extends ServerWithId {
  serverNotReachable: true;
}

export interface NotFoundServer {
  serverNotFound: true;
}

export type RegularServer = ReachableServer | NonReachableServer;

export type SelectedServer = RegularServer | NotFoundServer | null;

export type ServersMap = Record<string, ServerWithId>;

export const hasServerData = (server: SelectedServer | ServerData): server is ServerData =>
  !!(server as ServerData)?.url && !!(server as ServerData)?.apiKey;

export const isServerWithId = (server: SelectedServer | ServerWithId): server is ServerWithId =>
  !!(server as ServerWithId)?.id;

export const isReachableServer = (server: SelectedServer): server is ReachableServer =>
  !!(server as ReachableServer)?.version;

export const isNotFoundServer = (server: SelectedServer): server is NotFoundServer =>
  !!(server as NotFoundServer)?.serverNotFound;

// export const getServerId = (server: SelectedServer) => (isServerWithId(server) ? server.id : '');
export const getServerId = (server: SelectedServer) => hardcodedServer.id;

// export const serverWithIdToServerData = ({ id, autoConnect, ...server }: ServerWithId): ServerData => server;
export const serverWithIdToServerData = ({ id, autoConnect, ...server }: ServerWithId): ServerData => hardcodedServer;