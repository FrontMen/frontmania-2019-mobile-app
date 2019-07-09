export const allDataQuery = /* GraphQL */ `
  query {
    speakers {
      id
      name
      email
      twitter
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

      speakers {
        id
        name
      }
    }
  }
`;
