import React from "react";

const Body = () => {
    return (
        <>
            <div className="max-w-6xl px-4 sm:px-6 mx-auto my-10">
                <div className="flex justify-center">
                    <p className="font-bold border-b-4 text-4xl mb-5 pb-5">
                        Packages
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="border rounded-xl shadow-lg p-5">
                        <p className="uppercase text-purple-700 font-bold mb-4">
                            Getting Started
                        </p>
                        <h1 className="text-xl font-bold mb-2">Singularity</h1>
                        <p className="text-sm text-gray-500 mb-6">
                            This package will suit you if you want a single page
                            simple website for you product. It will cover only
                            one web UI. You can revise the design for 2 times
                            after the initial draft discussion session…
                        </p>
                        <button className="whitespace-nowrap inline-flex items-center justify-center px-12 py-2 border border-transparent rounded-3xl shadow-sm text-base font-bold text-white bg-purple-700">
                            See More
                        </button>
                    </div>
                    <div className="border rounded-xl shadow-lg p-5">
                        <p className="uppercase text-purple-700 font-bold mb-4">
                            Business Workflow
                        </p>
                        <h1 className="text-xl font-bold mb-2">Pluraity</h1>
                        <p className="text-sm text-gray-500 mb-6">
                            This package will suit you if you want a single page
                            simple website for you product. It will cover only
                            one web UI. You can revise the design for 2 times
                            after the initial draft discussion session…
                        </p>
                        <button className="whitespace-nowrap inline-flex items-center justify-center px-12 py-2 border border-transparent rounded-3xl shadow-sm text-base font-bold text-white bg-purple-700">
                            See More
                        </button>
                    </div>
                    <div className="border rounded-xl shadow-lg p-5">
                        <p className="uppercase text-purple-700 font-bold mb-4">
                            Interactions
                        </p>
                        <h1 className="text-xl font-bold mb-2">Professional</h1>
                        <p className="text-sm text-gray-500 mb-6">
                            This package will suit you if you want a single page
                            simple website for you product. It will cover only
                            one web UI. You can revise the design for 2 times
                            after the initial draft discussion session…
                        </p>
                        <button className="whitespace-nowrap inline-flex items-center justify-center px-12 py-2 border border-transparent rounded-3xl shadow-sm text-base font-bold text-white bg-purple-700">
                            See More
                        </button>
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>
        </>
    );
};

export default Body;
