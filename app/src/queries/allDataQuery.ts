// TODO: create separate queries and use them when necessary
export const allDataQuery = /* GraphQL */ `
  query {
    configs {
      eventInfo
    }

    questions {
      question
      answer
    }

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
