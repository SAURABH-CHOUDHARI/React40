import  { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const AsciiKeyInfo = () => {
    const [keyInfo, setKeyInfo] = useState({
        key: '',
        code: '',
        ascii: '',
        hex: ''
    });

    useEffect(() => {
        const handleKeyDown = (e) => {
            e.preventDefault();
            const ascii = e.key.length === 1 ? e.key.charCodeAt(0) : '';

            setKeyInfo({
                key: e.key,
                code: e.code,
                ascii: ascii ? ascii.toString() : 'N/A',
                hex: ascii ? '0x' + ascii.toString(16).toUpperCase() : 'N/A'
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <Card className="w-96 bg-black text-gray-200">
            <CardHeader>
                <CardTitle>ASCII Key Information</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4 ">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="font-semibold">Key:</div>
                        <div>{keyInfo.key || 'Press any key'}</div>

                        <div className="font-semibold">Key Code:</div>
                        <div>{keyInfo.code}</div>

                        <div className="font-semibold">ASCII:</div>
                        <div>{keyInfo.ascii}</div>

                        <div className="font-semibold">Hex:</div>
                        <div>{keyInfo.hex}</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default AsciiKeyInfo;