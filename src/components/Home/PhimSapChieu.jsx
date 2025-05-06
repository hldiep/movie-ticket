import React from 'react'
import SeeMore from './SeeMore'

const PhimSapChieu = () => {
    return (
        <div className="min-h-screen pt-20 bg-main flex justify-center">
            <div className={"container"}>
                <main className="p-8 text-center">
                    <div className="text-4xl font-bold mt-10 flex items-start justify-center">
                        <span className="text-white">PHIM SẮ</span>
                        <span className="text-yellow-600 relative top-2">P CHIẾU</span>
                    </div>
                    <SeeMore />
                </main>
            </div>
        </div>
    )
}

export default PhimSapChieu