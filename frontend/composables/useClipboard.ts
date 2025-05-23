// composables/useClipboard.ts

export const useClipboard = () => {
    /**
     * Copies the given text to the user's clipboard and temporarily changes the clicked icon.
     *
     * Arguments:
     *  - event: The mouse event triggered by clicking the clipboard icon.
     *  - text: The text content to be copied to the clipboard.
     */
    const copyToClipboard = async (event: MouseEvent, text: string): Promise<void> => {
        const target = event.target;

        // Ensure the clicked element is an <img> tag
        if (!(target instanceof HTMLImageElement)) {
            console.error('Target is not an image element');
            return;
        }

        try {
            // Write the text to the user's clipboard
            await navigator.clipboard.writeText(text);

            // Change the icon to a checkmark to indicate success
            target.src = '/icons/check-icon.svg';

            // Revert the icon back to the original clipboard after 3 seconds
            setTimeout(() => {
                target.src = '/icons/clipboard-icon.svg';
            }, 3000);
        } catch (err) {
            // Log any errors that occur during the copy process
            console.error('Error copying text: ', err);
        }
    };

    return { copyToClipboard };
};
