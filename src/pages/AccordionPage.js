import React,{useState} from 'react'
import Accordion from '../components/Accordion'

const dataList = [
  {
    label: 'Product Name',
    content: 'Introducing the latest innovation that will revolutionize the industry. Our new product combines cutting-edge technology with elegant design, setting a new standard for excellence.'
  },
  {
    label: 'Release Date',
    content: 'September 5, 2023'
  },
  {
    label: 'Creator',
    content: 'Jane Smith'
  },
  {
    label: 'Features',
    content: 'Experience unparalleled performance and convenience with features like advanced AI integration, seamless connectivity, and intuitive user interface.'
  },
  {
    label: 'Benefits',
    content: 'Discover how our product can streamline your workflow, increase productivity, and open up new possibilities for growth.'
  },
  {
    label: 'Availability',
    content: 'Pre-order starts today, and you can expect to have the product in your hands by the release date. Don\'t miss out on being among the first to experience the future.'
  },
  {
    label: 'Support',
    content: 'Our dedicated support team is ready to assist you with any questions or concerns. We believe in providing exceptional post-purchase support to ensure your satisfaction.'
  },

  ];

const AccordionPage = () => {


  return (
    <div style={{ display:"flex",justifyContent: "center",alignItems: 'center'}}>
        <Accordion items={dataList}/>
    </div>
  )
}

export default AccordionPage