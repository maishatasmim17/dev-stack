import { useState } from "react";


function Navbar(){


const [menuOpen,setMenuOpen] = useState(false);



return(

<nav

className="
fixed
top-0
left-0
z-[999]
w-full
bg-white/95
backdrop-blur-md
border-b
border-gray-100
shadow-sm
"

>


<div

className="
max-w-[1200px]
mx-auto
px-6
h-20
flex
items-center
justify-between
"

>





{/* Logo */}

<div

className="
flex
items-center
gap-3
"

>


<div

className="
w-8
h-8
rounded-lg
bg-gradient-to-r
from-pink-500
to-rose-500
flex
items-center
justify-center
text-white
font-bold
text-sm
"

>

DS

</div>



<span

className="
text-xl
font-bold
text-slate-900
"

>

DevStack

</span>


</div>








{/* Desktop Menu */}

<div

className="
hidden
md:flex
items-center
gap-8
text-sm
"

>


<a className="
text-[#e11d48]
font-semibold
">

Home

</a>


<a className="
text-slate-600
font-medium
">

Technologies

</a>


<a className="
text-slate-600
font-medium
">

Projects

</a>


<a className="
text-slate-600
font-medium
">

About

</a>


<a className="
text-slate-600
font-medium
">

Contact

</a>



</div>








{/* Buttons */}

<div

className="
hidden
md:flex
items-center
gap-5
"

>


<button

className="
text-sm
font-semibold
text-slate-700
"

>

Sign In

</button>



<button

className="
px-5
py-2
rounded-full
bg-[#e11d48]
text-white
text-sm
font-semibold
"

>

Sign Up

</button>


</div>








{/* Mobile */}

<div

className="
flex
md:hidden
items-center
gap-3
"

>


<button

className="
px-4
py-1.5
rounded-full
bg-[#e11d48]
text-white
text-xs
font-semibold
"

>

Sign Up

</button>



<button

onClick={()=>setMenuOpen(!menuOpen)}

className="
text-xl
"

>

☰

</button>



</div>






</div>







{
menuOpen &&

<div

className="
md:hidden
bg-white
border-t
px-6
py-5
space-y-3
"

>

<p>Home</p>
<p>Technologies</p>
<p>Projects</p>
<p>About</p>
<p>Contact</p>


</div>

}



</nav>


);


}


export default Navbar;