"use client";
import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition } from "@mantine/core";
import { iconDefaultProps } from "../utils";

export const ScrollTopAffix = () => {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <Affix position={{ bottom: 20, right: 20 }}>
            <Transition transition="slide-up" mounted={scroll.y > 0}>
                {(transitionStyles) => (
                    <Button
                        leftSection={<IconArrowUp {...iconDefaultProps} />}
                        style={transitionStyles}
                        onClick={() => scrollTo({ y: 0 })}
                    >
                        Scroll to top
                    </Button>
                )}
            </Transition>
        </Affix>
    );
};
