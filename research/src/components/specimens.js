import _ from 'lodash'
import React from 'react'
import { getImagesForComponentConcept } from '../sources'
import Image from './image'

const Specimens = ({ component, concept }) => {
  const images = getImagesForComponentConcept(component, concept)
  const hasImages = !_.isEmpty(images)

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '8px',
        border: '1px solid #ccc',
      }}
    >
      {images.map((image, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            flex: '0 0 auto',
            flexDirection: 'column',
            padding: hasImages ? '8px' : '16px',
            textAlign: 'center',
          }}
        >
          <div style={{ margin: 'auto', padding: '4px' }}>
            <Image
              src={image.image}
              title={image.image}
              alt={`An image of the ${concept} concept on a ${component} component in ${image.sourceName}.`}
            />
          </div>
          <div
            style={{
              position: 'relative',
              padding: '4px 8px',
              minWidth: '120px',
              textTransform: 'uppercase',
              fontSize: '11px',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              color: 'rgba(0, 0, 0, 0.6)',
              borderTop: '1px solid #ccc',
            }}
          >
            {image.sourceName}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Specimens
