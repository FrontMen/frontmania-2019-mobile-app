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
      startsAt
      endsAt
      description
      tags {
        name
      }

      cover {
        url
      }

      room {
        id
        name
      }

      speaker {
        id
        name
      }
    }
  }
`;
