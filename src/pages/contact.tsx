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
                title="Get in Touch"
                descFor={config.metaDescriptions.contactPage}
            />
            <ContentCard>
                <>
                    <Header title="Get in Touch" center={false} value={1} />
                    <ContactForm />
                </>
            </ContentCard>
        </Layout>
    )
}

export default contact
