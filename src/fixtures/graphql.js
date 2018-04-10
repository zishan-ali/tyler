export const query =
`import gql from 'graphql-tag';

const query = gql\`{
  foo {
    bar
    baz
  }
}\`

export default query;\n`;

export const mutation =
`import gql from 'graphql-tag';

const mutation = gql\`{
  foo(bar) {
    poo(baz) {
      boo
    }
  }
}\`

export default mutation\n`;