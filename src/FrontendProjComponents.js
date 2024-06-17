import React from 'react'
import Button from './mini-components/Button'
import { useState } from 'react';

const FrontendProjComponents = ({i, title, description, image, githubLink, liveLink, className}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const isSmallDevice = window.innerWidth < 768;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shortenedDescription = `${description.slice(0, 100)}...`;

  return (
    <div className={`flex ${i%2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col justify-between w-[80%] overflow-hidden rounded-[10px] border-[1px] border-[#333333] mt-4 min-h-[500px] md:min-h-0`}>
    <div className="flex justify-center items-center md:w-1/3 w-full md:h-[400px] h-[200px] overflow-hidden"><img src={image} className={`md:transform md:scale-[177%] md:hover:scale-100 md:duration-300 object-cover w-full h-full md:w-auto md:h-auto`}></img></div>
      <div className="md:w-2/3 md:p-6 w-full p-4 flex flex-col justify-between md:items-start items-center md:text-left text-center">
      <div className="flex flex-col">
        <h2 className="md:text-xl text-lg font-medium">
        {title}
        </h2>
        <p className="mt-6 font-light"  dangerouslySetInnerHTML={{ __html:  isSmallDevice ? (isExpanded ? description : shortenedDescription) : description }}>
        
        </p>
        {isSmallDevice && !isExpanded && (
            <button onClick={toggleReadMore} className="text-blue-500 mt-2">
              Read More
            </button>
          )}
          {isSmallDevice && isExpanded && (
            <button onClick={toggleReadMore} className="text-blue-500 mt-2">
              Show Less
            </button>
          )}
        </div>
        <div className={`flex ${i%2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row w-full md:justify-end justify-center mt-4 gap-2`}>
        
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <Button icon='<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
</svg>'  className="bg-[#32E1F3] hover:bg-opacity-[100%] hover:bg-[#32F35E] active:bg-opacity-[40%]">Live Preview</Button></a>

<a href={githubLink} target="_blank" rel="noopener noreferrer">
        <Button className="bg-white" icon='<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512" ><path fill-rule="evenodd" clip-rule="evenodd" fill="#000000" d="M192 368.004c0-8.844 7.156-16 16-16s16 7.156 16 16-7.156 16-16 16-16-7.156-16-16zM349.328 494.16c-4.266 1.219-8.672 2.094-13.328 2.094-26.516 0-48-21.484-48-48v-58.188c0-20.094 12.898-37.156 30.797-43.438C353.164 335.082 384 306.082 384 272.004V240c0-15.164-6.188-29.285-16-41.367V162.5c0-17.668-14.328-23.719-32-13.496l-24.516 14.176C303.633 161.145 295.703 160 288 160h-64c-7.699 0-15.633 1.145-23.484 3.18L176 149.004c-17.668-10.223-32-4.172-32 13.496v36.133c-9.812 12.082-16 26.203-16 41.367v32.004c0 23.281 14.488 44.188 34.578 58.812l-.02.031c4.172 2.859 6.945 7.688 6.945 13.156 0 8.828-7.176 16-16 16-4.52 0-8.574-1.891-11.48-4.906C115.004 334.629 96 305.035 96 272.004V240c0-18.523 6.012-35.977 16-51.375v-47.633c0-35.336 28.645-47.438 64-26.996l27.461 15.887C210.309 128.719 217.172 128 224 128h64c6.828 0 13.688.719 20.539 1.883L336 113.996c35.359-20.441 64-8.34 64 26.996v47.633c9.984 15.398 16 32.852 16 51.375v32.004c0 47.609-39.25 88.141-85.531 104.359-.055.047-.109.172-.188.188-6.016 2.312-10.281 8.125-10.281 14.953v56.75c0 8.844 7.156 16 16 16 1.336 0 2.562-.375 3.797-.688C421.969 430.41 480 350.066 480 256c0-123.715-100.281-224-224-224C132.285 32 32 132.285 32 256c0 97.41 62.254 180.066 149.121 210.895.445.047.852.234 1.316.234 5.277 0 9.562-4.297 9.562-9.562 0-5.281-4.285-9.562-9.562-9.562-.113 0-.113-.094-.191-.141-53.16-1.422-53.219-63.859-70.246-63.859-8.844 0-16-7.156-16-16s7.156-16 16-16h7.988c32.02 0 27.445 64 72.012 64 17.668 0 32 14.328 32 32v28c0 15.453-12.527 28-28.004 28-1.688 0-3.277-.344-4.887-.656C81.203 474.613 0 374.926 0 256 0 114.617 114.617 0 256 0s256 114.617 256 256c0 108.41-67.492 200.848-162.672 238.16z"/></svg>'>Github Link</Button></a>

        
        
        </div>
      </div>
    </div>
  )
}

export default FrontendProjComponents