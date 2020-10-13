import React from 'react'
import Layout from '../components/layout/layout'
import {Header} from '../components/titles/titles'
import SEO from '../components/SEO/SEO'
import ContactForm from '../components/contact_form/index'
import ContentCard from '../components/content/content'
import config from '../../config/website'

const contact: React.FC<IProps> = (props: IProps) => {
    return (
        <Layout>
            <SEO
                title={config.metaDescriptions.contact.title}
                descFor={config.metaDescriptions.contact.description}
            />
            <Header title="Get in Touch" center={true} value={1} major />
            <ContactForm />
        </Layout>
    )
}

export default contact
