import { useState, useEffect } from 'react';

type DeviceType = 'phone' | 'tablet' | 'pc';

const useWindowSize = (): DeviceType => {
    const [deviceType, setDeviceType] = useState<DeviceType>('pc')

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            let newDeviceType: DeviceType = 'pc'

            if (width < 768) {
                newDeviceType = 'phone'
            } else if (width >= 768 && width < 1024) {
                newDeviceType = 'tablet'
            } else {
                newDeviceType = 'pc'
            }

            setDeviceType(newDeviceType)
        }

        if (typeof window !== 'undefined') {
            handleResize()
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [])

    return deviceType
};

export default useWindowSize;

