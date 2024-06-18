import { useState, useEffect } from 'react';

type DeviceType = 'phone' | 'tablet' | 'pc';

export default function useWindowSize(): DeviceType {
    const [deviceType, setDeviceType] = useState<DeviceType>('pc')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                const width = window.innerWidth;
                let newDeviceType: DeviceType = 'pc';

                if (width < 768) {
                    newDeviceType = 'phone';
                } else if (width >= 768 && width < 1024) {
                    newDeviceType = 'tablet';
                } else {
                    newDeviceType = 'pc';
                }

                setDeviceType(newDeviceType);
            };

            handleResize();

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return deviceType
};


