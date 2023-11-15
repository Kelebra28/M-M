import Image from "next/image"


export default function AboutUs() {
    return (
        <section className="bg-white py-0 lg:py-8 xl:py-10">
            <div className="relative flex flex-col-reverse px-12 py-14 mx-auto lg:block  lg:py-14 xl:py-14 md:px-8 sm:max-w-xl md:max-w-screen-xl">
                <div className="relative flex max-w-xl mx-auto lg:max-w-screen-xl">
                    <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl uppercase font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                                Quiénes somos
                            </h2>
                            <p className="text-base text-black md:text-lg">
                                Somos una empresas dedicada a la maquila y manufactura de suajes con una larga trayectoria de excelencia y compromiso en la industria. La empresa se caracteriza por su enfoque en la transformación y la evolución constante para proporcionar a nuestros clientes productos innovadores y de alta calidad.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="z-0 flex justify-center h-[350px] md:h-[450px] lg:h-full lg:pr-2 ">
                    <div className="z-0 bg-red-600 overflow-hidden h-4 w-[400px] absolute -top-2 -right-32"></div>
                    <div className="flex overflow-hidden absolute items-center justify-center pl-6 -right-4 lg:bottom-0 lg:top-0 md:-right-0 lg:-right-8 xl:-right-32  lg:justify-end">
                        <Image
                            alt=''
                            src='/sections/AboutUs.jpg'
                            height={500}
                            width={500}
                            className=" overflow-hidden object-cover object-right w-full h-auto lg:w-auto lg:h-full lg:max-h-[400px] rounded-l-[50px] xl:rounded-[50px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}
