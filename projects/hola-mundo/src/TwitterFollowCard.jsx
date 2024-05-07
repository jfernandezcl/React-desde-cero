export function TwitterFollowCard ({userName, name, isFollowing}) {
    return (
        <article>
            <header>
                <img alt="El avatar de midudev" src="https://unavatar.io/midudev" />
                <div>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}