import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component';

/* component styles */
import { styles } from './styles.scss';

var djsConfig = {
    addRemoveLinks: true,
    params: {
        myParameter: "I'm a parameter!"
    }
};
var componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/uploadHandler'
};

export class Welcome extends Component {
  render() {
    return (
      <section className={`${styles}`}>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h1>
                ZopaaS
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">

              <DropzoneComponent config={componentConfig}
                djsConfig={djsConfig} />
            </div>
          </div>


          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <div className="drop-file">
                DROP YOUR FILES HERE
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <p>Zopfli Compression Algorithm is a compression library programmed in C to perform
very good, but slow, deflate or zlib compression.</p>
              <p>This equals to <a href="http://blog.codinghorror.com/zopfli-optimization-literally-free-bandwidth/">literally free bandwidth</a>, but the community at large is being slow to adopt.</p>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
