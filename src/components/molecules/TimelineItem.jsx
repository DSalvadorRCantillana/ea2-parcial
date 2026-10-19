import Heading from '../atoms/Heading'

function TimelineItem({ title, subtitle, period, description }) {
    return (
        <li className="relative border-l-2 border-indigo-200 pb-8 pl-6 last:pb-0">
            <span
                aria-hidden="true"
                className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-indigo-600"
            />
            <Heading level={3}>{title}</Heading>
            <p className="font-medium text-slate-700">{subtitle}</p>
            <p className="text-sm text-slate-500">{period}</p>
            {description && <p className="mt-2 text-slate-600">{description}</p>}
        </li>
    )
}

export default TimelineItem