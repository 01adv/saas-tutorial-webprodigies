import dynamic from "next/dynamic"
import CallToAction from "./_components/CallToAction"
import DashboardSnippet from "./_components/dashboard-snippet"

// const PricingSection = dynamic(()=> import("./_components/PricingSection").then(component) => component.PricingSection),)
const PricingSection = dynamic(
    () =>
        import("./_components/pricing").then(
            (component) => component.PricingSection,
        ),
    { ssr: true },
)

type Props = {}
const page = (props: Props) => {
    return (
        <main className="md:px-10 py-20 flex flex-col gap-36">
            <div>
                <CallToAction />
                <DashboardSnippet />
            </div>
            <PricingSection />
        </main>
    )
}

export default page
