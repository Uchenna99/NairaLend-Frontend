export interface AlertObj {
    background: string;
    color: string;
    symbol: string;
    title: string;
    text: string;
}

export const alertTypes: AlertObj[] = [
    {
        background: '#00bc00',
        color: '#c8ffc8',
        symbol: 'Done',
        title: 'Success',
        text: 'Action completed successfully'
    },
    {
        background: '#ffa4a4',
        color: '#ff0000',
        symbol: 'Failed',
        title: 'Error',
        text: 'Action failed to complete'
    },
    {
        background: '#00bc00',
        color: '#c8ffc8',
        symbol: 'good',
        title: 'Okay',
        text: 'Welcome'
    }
]