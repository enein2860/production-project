import { Decorator } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/theme'
import React from 'react'

export const ThemeDecorator = (theme: Theme): Decorator => 
    function StoryDecorator(Story) {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <Story />
                </div>
            </ThemeProvider>
        )
    }
