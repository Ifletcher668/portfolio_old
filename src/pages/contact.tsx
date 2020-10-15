import React from 'react'
import Layout from '../components/Layout'
import {Header} from '../components/Titles'
import SEO from '../components/SEO/SEO'
import ContactForm from '../components/ContactForm/index'
import ContentCard from '../components/Content'
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
