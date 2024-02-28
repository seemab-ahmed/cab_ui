
export default function Navbar() {


  return (
    <>
              <div className="mx-auto max-w-[1920px] px-8 sm:px-6 lg:px-10 h-[90px]">
                <div className="flex items-center justify-between h-full">
                  <div className="flex items-center">
                    
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                      
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="ml-4 flex items-center md:ml-6 "> 
                  
                    </div>
                  </div>
                </div>
              </div>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
    </>
  )
}

