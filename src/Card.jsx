import Background from './assets/images/drawers.jpg'
import Ava from './assets/images/avatar-michelle.jpg'
import Facebook from './assets/images/icon-facebook.svg'
import Pint from './assets/images/icon-pinterest.svg'
import Share from './assets/images/icon-share.svg'
import twitter from './assets/images/icon-twitter.svg'
import Traingle from './assets/images/caret-down-solid.svg'


function Card () {

    const handleClick = () => {
            var x = document.getElementById('share'); 

            if(x.classList.contains('hidden')){
                
                x.classList.remove('hidden');
            }
            else{
            x.classList.add('hidden');
            }
        }

    return( 
        <div className=' relative box-border sha flex items-center  md:max-w-3xl md:max-h-72 justify-between bg-white rounded-lg manrope-uniquifier max-sm:flex-col'>
            <img src={Background} className=' w-72 h-72 max-sm:w-full md:rounded-l-lg'/>
            <div className='felx items-center justify-center p-10 max-sm:pb-8'> 
                <p className='text-[var(--text-p)] font-semibold text-2xl mb-3 max-w-96 max-sm:w-76'>Shift the overall look and feel by adding
                 these wonderful touches to furniture in your home</p>

                <p className='text-[var(--text-s)] mb-5 max-w-96 text-sm max-sm:w-76 max-sm:text-base'>Ever been in a room and felt like something 
                    was missing? Perhaps it felt slightly bare and
                     uninviting. I’ve got some simple tips to help 
                     you make any room feel complete.</p>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4'>  
                        <img src={Ava} className='w-10 h-10 rounded-full' />
                        <div> <p className='font-semibold text-[var(--text-p)]'>Michelle Appleton</p> <p className='text-[var(--text-s)]'>28 Jun 2020</p></div>
                    </div>
                    <div className='bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center'>
                    <img src={Share} onClick={handleClick}/>
                    </div>
                </div>
            </div>
            <div id='share' className='hidden'>
            <div className='absolute bg-[var(--Very-Dark-Grayish-Blue)] flex gap-2 items-center rounded-lg py-4 px-6  -right-10 bottom-24 max-sm:left-0 max-sm:right-0 max-sm:bottom-0 max-sm:h-20 max-sm:rounded-t-none maxsm justify-evenly'>
                <p>S H A R E</p>
                <img src={Facebook} className='max-sm:w-8' />
                <img src={twitter} className='max-sm:w-8' />
                <img src={Pint} className='max-sm:w-8' />
                <img src={Share} onClick={handleClick} className='max-sm:w-8'/>

            </div>
            <img src={Traingle} className='absolute right-8 bottom-16 max-w-16 max-h-16 max-sm:hidden' />
            </div>
        </div>
    )
}
export default Card