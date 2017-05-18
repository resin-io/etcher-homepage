import React, { Component, PropTypes } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from '../components/Image';
import Typekit from 'react-typekit';
import { Tracker, Locals } from './_Providers';
import 'babel-polyfill';
import '../lib/raven';

export default class extends Component {
  render() {
    return (
      <Tracker analytics={this.props.analytics}>
        <div>
          <Head>
            <title>{this.props.title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
            <meta property="og:url" content={`${this.props.website}`} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${this.props.title} by resin.io`} />
            <meta property="og:description" content={`${this.props.lead}`} />
            <meta property="og:image" href={`/static/${this.props.screenshot}`} />
            <title>{this.props.title}</title>
            <Typekit kitId={this.props.typekitId}/>
            <link rel="stylesheet" type="text/css" href="/static/index.css" />
          </Head>
          <Nav
            color="inverse"
            inverse
            title={this.props.title}
            brand={this.props.logo}
            pages={this.props.nav.header}
          />
            { this.props.children }
          <Footer className="bg-inverse text-white py-5" pages={this.props.nav.footer}>
            <Image
              className="mb-2"
              src={`${this.props.logo}`}
            />
            <p
              className="col-md-8 pl-0 text-muted"
              dangerouslySetInnerHTML={{ __html: this.props.attribution }} />
          </Footer>
        </div>
      </Tracker>
    )
  }
}
