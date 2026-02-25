import React, { ErrorInfo, Suspense } from 'react'
import { Loader } from 'widgets/Loader/ui/Loader'
import { ErrorPage } from 'widgets/ErrorPage'

interface ErrorBoundaryProps {
    children: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, info)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback={<Loader />}>
                    <ErrorPage />
                </Suspense>
            )
        }

        return this.props.children
    }
}
