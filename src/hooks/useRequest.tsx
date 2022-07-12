import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';
import { ICharacterQueryFilters } from '../models/character.models';

const API_URL = `https://rickandmortyapi.com/graphql`;

const graphQLClient = new GraphQLClient(API_URL, {});

export function useGetCharacters(
  queryFilters: Partial<ICharacterQueryFilters>
) {
  return useQuery(
    ['get-characters', queryFilters],
    async () => {
      const { characters } = await graphQLClient.request(
        gql`
          query Get(
            $name: String
            $status: String
            $species: String
            $type: String
            $gender: String
          ) {
            characters(
              filter: {
                name: $name
                status: $status
                species: $species
                type: $type
                gender: $gender
              }
            ) {
              results {
                id
                name
                status
                species
                type
                gender
                origin {
                  name
                  type
                  dimension
                }
                location {
                  id
                  name
                  type
                  dimension
                }
                image
                episode {
                  id
                  name
                  air_date
                  episode
                  characters {
                    id
                    name
                  }
                }
              }
            }
          }
        `,
        {
          name: queryFilters?.name,
          status: queryFilters?.status,
          species: queryFilters?.species,
          type: queryFilters?.type,
          gender: queryFilters?.gender,
        }
      );
      return characters.results;
    },
    {
      enabled: !!queryFilters,
    }
  );
}
