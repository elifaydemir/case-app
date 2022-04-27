import Head from 'next/head'
function Header({title, description}){
    return (
        <Head>
            <title>{title ? title:""}</title>
            <meta name="description" content={description ? description : ""} />
            <link rel="icon" href="#" />
        </Head>
    )
}
export default Header;
