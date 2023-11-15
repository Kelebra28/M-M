import Image from "next/image"


export default function OurCompromise() {
    return (
        <section className="bg-black py-0 lg:py-8 xl:py-10">
            <div className="relative flex flex-col px-12 py-14 mx-auto lg:block  lg:py-14 xl:py-14 md:px-8 sm:max-w-xl md:max-w-screen-xl">

                <div className="z-0 flex justify-center h-[350px] md:h-[450px] lg:h-full lg:pl-2 overflow-hidden">
                    <div className="flex overflow-hidden absolute items-center justify-center pr-6 -left-16 lg:bottom-0 lg:top-0 lg:-left-28 xl:-left-32 lg:justify-end">
                        <Image
                            alt=''
                            src='/sections/OurCompromise.jpg'
                            height={300}
                            width={600}
                            className="z-10 overflow-hidden object-cover object-right w-full lg:w-auto lg:h-full lg:max-h-[400px] rounded-r-[50px] xl:rounded-[50px]" />
                        <div className="z-0 bg-red-600 h-4 w-[400px] absolute bottom-0 left-0"></div>
                    </div>
                </div>
                <div className="relative flex max-w-xl mx-auto lg:max-w-screen-xl justify-end">
                    <div className="mb-16 lg:pl-5 lg:max-w-lg lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl uppercase font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Nuestro compromiso
                            </h2>
                            <p className="text-base text-white md:text-lg">
                                Nos bassamos en la transformación continua y la innovación en el campo de la maquila y manufactura de suajes. como empresa nos esforsamos por representar la evolución constante y la adaptación a las necesidades cambiantes de nuestros clientes. Valoramos la eficiencia y la presición en nuestro trabajo, lo que se traduce en nuestro compromiso de proporcionar trabajos de la mas alta calidad.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
