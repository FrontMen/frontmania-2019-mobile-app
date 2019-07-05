export const allDataQuery = /* GraphQL */ `
  query {
    speakers {
      id
      name
      email
      avatar {
        url
      }
      cover {
        url
      }
      bio
    }

    rooms {
      id
      name
    }

    talks {
      id
      title
      description

      cover {
        url
      }

      room {
        name
      }

      speaker {
        name
      }
    }
  }
`;
