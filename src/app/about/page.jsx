import React from 'react';
import { Neucha } from 'next/font/google'
const neucha = Neucha({
  weight: '400',
  subsets: ['latin'],
})

const page = () => {
    return (
        <div className={neucha.className} >
            <h1 className='text-center'>How does a nuclear plant works?</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/AMXxXoHtM-o?si=L79FekR7pciIlCR3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='content-center'></iframe>
        </div>
    );
};

export default page;