import React from 'react'
import { BoxInformation } from './BoxInformation'
import ContentRowTop from './ContentRowTop'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

const ContentWrapper = () => {
    return (
		// <!-- Content Wrapper -->
		<div id="content-wrapper" className="d-flex flex-column">
			{/* <!-- Main Content --> */}
			<div id="content">
                <Navbar />
                <ContentRowTop />
                <BoxInformation />
                <Footer />
            </div>
        </div>
    )
}

export default ContentWrapper;