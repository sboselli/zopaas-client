import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import { Welcome } from 'components/Welcome';
import { Tools } from 'components/Tools';
import { Projects } from 'components/Projects';

const metaData = {
  title: 'Zopaas',
  description: 'Google\'s Zopfli super efficient Compression Algorithm as a Service !',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'zopaas, google, zopfli, compression, gzip, deflate',
    },
  },
};

export class Home extends Component {
  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <Welcome />
      </section>
    );
  }
}
