import React from 'react';

export default class Html extends React.Component {
  render () {
    const { children, scripts } = this.props;

    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <title>Server Side Rendered React App!!</title>
        </head>
        <body>
          <div id="app"
               dangerouslySetInnerHTML={{ __html: children }}
          ></div>
          {scripts.map((item, index) => {
            return <script key={index} src={item}></script>;
          })}
        </body>
      </html>
    );
  }
}
