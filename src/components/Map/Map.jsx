import { Loader } from '@googlemaps/js-api-loader'
import { useRef, useEffect } from 'react'

export const Map = () => {
  const mapRef = useRef(null)
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.GOOGLE_MAP_APIKEY,
        version: 'weekly'
      })

      const { Map } = await loader.importLibrary('maps')

      // init marker

      const { Marker } = await loader.importLibrary('marker')

      const position = {
        lat: -23.366013,
        lng: -58.302177
      }

      // options

      const mapOptions = {
        center: position,
        zoom: 5,
        mapId: process.env.MY_NEXTJS_MAPID
      }

      // setup map

      const map = new Map(mapRef.current, mapOptions)

      const marker = new Marker({
        position,
        map
      })
    }

    initMap()
  }, [])

  return (
    <>
      <div style={{ height: '300px' }} className='m-3' ref={mapRef} />
    </>
  )
}
